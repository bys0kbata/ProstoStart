package com.example.backend.controllers;


import com.example.backend.DBEntity.BundleUC;
import com.example.backend.Service.BundleUCService;
import com.example.backend.Service.CommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/bundleuc")
public class BundleUCController {

    @Autowired
    private BundleUCService bundleUCService;
    @Autowired
    private CommandService commandService;
    @PostMapping("/create")
    public ResponseEntity<HttpStatus> createBundleUC(@RequestBody BundleUC bundleuc){
        bundleUCService.create(bundleuc);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/all")
    public java.util.List<BundleUC> getAll(){
        return bundleUCService.getAll();
    }
    @GetMapping("/delete")
    public ResponseEntity<HttpStatus> deleteUser(@RequestParam long id_bundleuc){
        bundleUCService.deletebundle(id_bundleuc);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
