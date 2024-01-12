package com.example.backend.Service;

import com.example.backend.DBEntity.BundleUC;
import com.example.backend.Repository.BundleUCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class BundleUCService {
    @Autowired
    public BundleUCRepository bundleUCRepository;
    public void create(BundleUC bundleUC){
        bundleUCRepository.save(bundleUC);
    }
    public List<BundleUC> getAll(){
        return bundleUCRepository.findAll();
    }
    public void deletebundle(long id_bundleuc){
        bundleUCRepository.deleteAllById(Collections.singleton(id_bundleuc));
    }

}
