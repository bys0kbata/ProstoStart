package com.example.backend.Service;

import com.example.backend.DBEntity.Command;
import com.example.backend.Repository.CommandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommandService {
    @Autowired
    public CommandRepository commandRepository;
    public void save(Command command){
        commandRepository.save(command);
    }
    public List<Command> getall(){
        List<Command> command = commandRepository.findAll();
        return command;
    }
}
