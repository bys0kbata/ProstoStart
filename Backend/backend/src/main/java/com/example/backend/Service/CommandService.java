package com.example.backend.Service;

import com.example.backend.DBEntity.Command;
import com.example.backend.DBEntity.User;
import com.example.backend.Repository.CommandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Optional<Command> getCommand(long id_command){
        Optional<Command> user=commandRepository.findById(id_command);
        return user;
    }
}
