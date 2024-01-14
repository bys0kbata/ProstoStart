package com.example.backend.Service;

import com.example.backend.DBEntity.Command;
import com.example.backend.Repository.CommandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
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
    public void changeComm(String name_Comand, String About_Comand,String Exp_Comand,String Contact_Comand,String Link_Comand,long id_Comand){
        commandRepository.Change(name_Comand, About_Comand, Exp_Comand, Contact_Comand, Link_Comand, id_Comand);
    }
    public List<Command> getCommID(long id_user){
        List<Command> comm =  commandRepository.findByIDUser(id_user);
        return comm;
    }
    public void deleteComm(long id_command){
        commandRepository.deleteAllById(Collections.singleton(id_command));
    }
}
