package net.javaguides.springboot.services.impl;

import java.util.Date;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import net.javaguides.springboot.services.JWTService;

@Service
public class JWTServiceImpl implements JWTService{
    
    // generate jwtToken depending on Username 
    public String generateToken(UserDetails userDetails){
        return Jwts.builder().subject(userDetails.getUsername())
        .issuedAt(new Date(System.currentTimeMillis()))
        .expiration(new Date(System.currentTimeMillis() + 86400)) // expire after a day
        .signWith(getSigninKey())
        .compact();
    }

    //to extract the information that you want from the json depending on T
    private <T> T extractClaim(String token, Function<Claims, T> ClaimResolvers){
        final Claims claims = extractAllClaims(token);
        return ClaimResolvers.apply(claims);
    }

    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    // gets the secret signing key, UNSAFE shouldn't be implemented like this
    private SecretKey getSigninKey(){
        byte[] key = Decoders.BASE64.decode("413F4428472B4B6250655368566D5970337336763979244226452948404D6351");
        return Keys.hmacShaKeyFor(key);
    }

    //verify signature of token then extracts all claims from it
    private Claims extractAllClaims(String token){
        return Jwts.parser().verifyWith(getSigninKey()).build().parseSignedClaims(token).getPayload();
    }

    //check if the token is valid by verifying sig and seing if username in it matches userDetails
    //and token not expired
    public boolean isTokenValid(String token, UserDetails userDetails){
        String username = extractUsername(token);
        return(username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    //get expiration off of token and see that it hasn't passed
    private boolean isTokenExpired(String token){
        return extractClaim(token, Claims::getExpiration).before(new Date(System.currentTimeMillis()));
    }

}
