package com.example.backend.controllers;

import com.example.backend.Service.BundleCSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BundleCSController {

    @Autowired
    private BundleCSService bundleCSService;
}
