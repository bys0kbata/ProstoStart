package com.example.backend.Repository;

import com.example.backend.DBEntity.User;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.function.Function;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    public Optional<User> findByLoginAndPassword(String login, String password);
}
