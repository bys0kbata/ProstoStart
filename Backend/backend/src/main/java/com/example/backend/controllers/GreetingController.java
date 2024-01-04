package com.example.backend.controllers;


import java.util.concurrent.atomic.AtomicLong;

import com.example.backend.DBEntity.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();


    @GetMapping("/greet")
    public User greet(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new User();
    }
}