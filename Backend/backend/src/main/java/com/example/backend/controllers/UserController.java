package com.example.backend.controllers;

import com.example.backend.DBEntity.User;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/all")
    public List<User> getAlluser(){
        return userService.getall();
    }
    @PostMapping("/reg")
    public ResponseEntity regUser(@RequestBody User user){
        userService.save(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/auth")
    public List<User> authUser(@RequestHeader String user_login, @RequestHeader String user_password){
        return userService.auth(user_login,user_password);

    }
    @GetMapping("/profile")
    public Optional<User> authUser(@RequestHeader long id_user){
        return userService.getUser(id_user);

    }
    @GetMapping("/change")
    public ResponseEntity changeUser( @RequestHeader String user_name, @RequestHeader String user_surname, @RequestHeader String user_patronic,@RequestHeader String user_login, @RequestHeader String user_password, @RequestHeader  String user_about,@RequestHeader String user_messager, @RequestParam long id_user){
        userService.changeUser( user_name, user_surname, user_patronic,id_user,user_messager, user_password,user_about,user_login);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/delete")
    public ResponseEntity<HttpStatus> deleteUser(@RequestHeader long id_user){
        userService.deleteUser(id_user);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
