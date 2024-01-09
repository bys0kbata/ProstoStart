package com.example.backend.Service;

import com.example.backend.DBEntity.BundleUC;
import com.example.backend.DBEntity.Command;
import com.example.backend.DBEntity.User;
import com.example.backend.Repository.BundleUCRepository;
import com.example.backend.Repository.StartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BundleUCService {
    @Autowired
    public BundleUCRepository bundleUCRepository;
    public void create(BundleUC bundleUC){
        bundleUCRepository.save(bundleUC);
    }

}
