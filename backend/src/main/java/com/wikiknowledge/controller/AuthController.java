package com.wikiknowledge.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    // Simple in-memory user store for demo purposes
    private static final Map<String, String> USERS = new HashMap<>();
    static {
        USERS.put("user", "password");
        USERS.put("admin", "admin123");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> payload, HttpSession session) {
        String username = payload.get("username");
        String password = payload.get("password");
        if (username == null || password == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "username and password required"));
        }
        String expected = USERS.get(username);
        if (expected != null && expected.equals(password)) {
            session.setAttribute("user", username);
            return ResponseEntity.ok(Map.of("username", username));
        }
        return ResponseEntity.status(401).body(Map.of("error", "invalid credentials"));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok(Map.of("status", "ok"));
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(HttpSession session) {
        Object user = session.getAttribute("user");
        if (user == null) {
            return ResponseEntity.status(401).body(Map.of("error", "not authenticated"));
        }
        return ResponseEntity.ok(Map.of("username", user.toString()));
    }
}
