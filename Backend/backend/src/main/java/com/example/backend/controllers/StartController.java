package com.example.backend.controllers;

import com.example.backend.DBEntity.Start;
import com.example.backend.Service.StartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
    @GetMapping("/profile")
    public Optional<Start> profStart(@RequestHeader long id_Start){
        return startService.getStart(id_Start);
    }
    @GetMapping("/delete")
    public ResponseEntity<HttpStatus> deleteStart(@RequestHeader long id_Start){
        startService.deleteStart(id_Start);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/change")
    public ResponseEntity<HttpStatus> changeStart(@RequestHeader String Name_Start,  @RequestHeader String About_Start, @RequestParam long id_Start){
        startService.changeStart(Name_Start, About_Start, id_Start);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/getuserstart")
    public List<Start> getUserStart(@RequestHeader long id_user){
        return startService.findByidStart(id_user);
    }

}
