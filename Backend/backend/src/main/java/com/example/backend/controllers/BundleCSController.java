package com.example.backend.controllers;

import com.example.backend.DBEntity.BundleCS;
import com.example.backend.Service.BundleCSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/bundlecs")
public class BundleCSController {

    @Autowired
    private BundleCSService bundleCSService;
    @PostMapping("/create")
    public ResponseEntity<HttpStatus> createBundle(@RequestBody BundleCS bundleCS){
        bundleCSService.save(bundleCS);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/all")
    public List<BundleCS> getAll()
    {
        return bundleCSService.getall();
    }
    @GetMapping("/change")
    public ResponseEntity<HttpStatus> changeBudle(@RequestHeader String status_bundle, @RequestParam long id_bundlecs)
    {
        bundleCSService.change(status_bundle, id_bundlecs);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
