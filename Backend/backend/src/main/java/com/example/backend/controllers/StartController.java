package com.example.backend.controllers;

import com.example.backend.DBEntity.Start;
import com.example.backend.Service.StartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/start")
public class StartController {

    @Autowired
    private StartService startService;
    @PostMapping("/create")
    public ResponseEntity<HttpStatus> createStart(@RequestBody Start start){
        startService.save(start);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/all")
    public List<Start> getAllStart(){
        return startService.getall();
    }
}
