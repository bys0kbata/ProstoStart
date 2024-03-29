package com.example.backend.Service;

import com.example.backend.DBEntity.User;
import com.example.backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
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
    public void deleteUser(long id_user){
        userRepository.deleteAllById(Collections.singleton(id_user));
    }
    public void changeUser(String user_name,String user_surname, String user_patronic, long id_user,String user_messager, String user_password,String user_about, String user_login  ){
        userRepository.Change(user_patronic,user_surname,user_name,user_login, id_user, user_messager,user_password,user_about);
    }
}
