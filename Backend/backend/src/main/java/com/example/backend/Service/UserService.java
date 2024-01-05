package com.example.backend.Service;

import com.example.backend.DBEntity.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save(User user){
        userRepository.save(user);
    }
    public List<User> auth(String user_name, String user_password){
        List<User> user = userRepository.findByNameAndPassword(user_name, user_password);
        return user;
    }
    public List<User> getall(){
        List<User> user = userRepository.findAll();
        return user;
    }
    public Optional<User> getUser(long id_user){
        Optional<User> user=userRepository.findById(id_user);
        return user;
    }
}
