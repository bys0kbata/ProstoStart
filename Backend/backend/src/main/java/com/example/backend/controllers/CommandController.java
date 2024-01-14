package com.example.backend.controllers;

import com.example.backend.DBEntity.Command;
import com.example.backend.Repository.UserRepository;
import com.example.backend.Service.CommandService;
import com.example.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/cmd")
public class CommandController {

    @Autowired
    private CommandService commandService;
    UserService userService;
    UserRepository userRepository;
    @PostMapping("/create")
    public ResponseEntity<HttpStatus> CMDcreate(@RequestBody Command command){
        commandService.save(command);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/all")
    public List<Command> getAllCMD(){
        return commandService.getall();
    }
    @GetMapping("/prof")
    public Optional<Command> getOneCMD(@RequestHeader long id_CMD) {return commandService.getCommand(id_CMD);}
    @GetMapping("/delete")
    public ResponseEntity<HttpStatus> deleteUser(@RequestHeader long id_command){
        commandService.deleteComm(id_command);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/change")
    public ResponseEntity changeUser( @RequestHeader String name_Comand, @RequestHeader String About_Comand, @RequestHeader String Exp_Comand,@RequestHeader String Contact_Comand, @RequestHeader String Link_Comand,  @RequestParam long id_Comand){
        commandService.changeComm(name_Comand, About_Comand, Exp_Comand, Contact_Comand, Link_Comand, id_Comand);
        return ResponseEntity.ok(HttpStatus.OK);
    }
    @GetMapping("/commuser")
    public List<Command> getCMD(@RequestHeader long id_CMD) {return commandService.getCommID(id_CMD);}
}
