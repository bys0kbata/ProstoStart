package com.example.backend.controllers;


import com.example.backend.DBEntity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@CrossOrigin
public class RegAuthController {
    @Autowired
    private UserService userService;

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();


    @GetMapping("/all")
    public List<User> getAll(){
            return userService.getAll();
        }
    }
