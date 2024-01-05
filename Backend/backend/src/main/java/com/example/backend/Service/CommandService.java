package com.example.backend.Service;

import com.example.backend.DBEntity.Command;
import com.example.backend.DBEntity.Start;
import com.example.backend.Repository.CommandRepository;
import com.example.backend.Repository.StartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommandService {
    @Autowired
    public CommandRepository commandRepository;
    public void save(Command command){
        commandRepository.save(command);
    }
}
