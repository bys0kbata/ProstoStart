package com.example.backend.controllers;

import com.example.backend.DBEntity.Command;
import com.example.backend.DBEntity.User;
import com.example.backend.Service.CommandService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/cmd")
public class CommandController {

    @Autowired
    private CommandService commandService;
    UserService userService;
    @PostMapping("/create")
    public ResponseEntity<HttpStatus> CMDcreate(@RequestBody Command command, @RequestBody long id_creater){
        User user = userService.getUser(id_creater).get();
        command.setId_creater(user);
        commandService.save(command);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/all")
    public List<Command> getAllCMD(){
        return commandService.getall();
    }
    
}
