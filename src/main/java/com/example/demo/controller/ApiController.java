package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping("/public")
    public String publicEndpoint() {
        return "This is a public endpoint, accessible without login.";
    }

    @GetMapping("/secure")
    public String secureEndpoint() {
        return "This is a secure endpoint, requires basic auth.";
    }
}
