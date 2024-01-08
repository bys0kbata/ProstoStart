package com.example.backend.Service;

import com.example.backend.DBEntity.Start;
import com.example.backend.DBEntity.User;
import com.example.backend.Repository.StartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Optional<Start> getStart(long id_Start){
        Optional<Start> start=startRepository.findById(id_Start);
        return start;
    }
}
