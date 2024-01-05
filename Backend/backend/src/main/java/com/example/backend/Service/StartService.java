package com.example.backend.Service;

import com.example.backend.DBEntity.Start;
import com.example.backend.DBEntity.User;
import com.example.backend.Repository.StartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StartService {
    @Autowired
    public StartRepository startRepository;
    public void save(Start start){
        startRepository.save(start);
    }
    public List<Start> getall(){
        List<Start> start = startRepository.findAll();
        return start;
    }
}
