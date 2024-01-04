package com.example.backend.controllers;


import com.example.backend.DBEntity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@CrossOrigin
public class RegAuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/reg")
    public ResponseEntity getAll(@RequestBody User user){
        userService.save(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/auth")
    public void getAuth(@RequestBody String name, String password){
        return userService.auth(name,password).;

    }
}
