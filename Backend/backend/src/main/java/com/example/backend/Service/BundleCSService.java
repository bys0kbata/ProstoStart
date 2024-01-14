package com.example.backend.Service;

import com.example.backend.DBEntity.BundleCS;
import com.example.backend.DBEntity.Start;
import com.example.backend.DBEntity.User;
import com.example.backend.Repository.BundleCSRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class BundleCSService {
    @Autowired
    private BundleCSRepository bundleCSRepository;
    public void save(BundleCS bundleCS){
        bundleCSRepository.save(bundleCS);
    }
    public List<BundleCS> getall(){
        List<BundleCS> user = bundleCSRepository.findAll();
        return user;
    }
    public void change(String 	status_bundle, long id_bundlecs){
        bundleCSRepository.Change(	status_bundle, id_bundlecs);
    }
    public List<BundleCS> getIDStart(long id_start){
        return bundleCSRepository.findByIDStart(id_start);
    }
    public void delete(long id_bundle){
        bundleCSRepository.deleteAllById(Collections.singleton(id_bundle));
    }
}
