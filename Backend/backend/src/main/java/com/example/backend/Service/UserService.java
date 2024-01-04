package com.example.backend.Service;

import com.example.backend.DBEntity.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save(User user){
        userRepository.save(user);
    }
    public List<User> auth(String name, String password){
        List<User> user = userRepository.findByNameAndPassword(name, password);
        return user;
    }
}
