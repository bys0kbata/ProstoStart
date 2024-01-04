package com.example.backend.controllers;


import com.example.backend.DBEntity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    public List<User> getAuth(@RequestHeader String name, @RequestHeader String password){
        return userService.auth(name,password);

    }
}
