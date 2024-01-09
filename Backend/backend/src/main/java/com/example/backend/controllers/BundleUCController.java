package com.example.backend.controllers;


import com.example.backend.DBEntity.BundleUC;
import com.example.backend.DBEntity.Command;
import com.example.backend.DBEntity.User;
import com.example.backend.Service.BundleUCService;
import com.example.backend.Service.CommandService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/bundleuc")
public class BundleUCController {

    @Autowired
    private BundleUCService bundleUCService;
    @Autowired
    private CommandService commandService;
    @PostMapping("/create")
    public ResponseEntity<HttpStatus> createBundleUC(@RequestBody String status, @RequestBody long id_user, @RequestBody long id_command){


        return ResponseEntity.ok(HttpStatus.OK);
    }
}
