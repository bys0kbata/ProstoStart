package com.example.backend.Repository;

import com.example.backend.DBEntity.Start;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StartRepository extends JpaRepository<Start,Long> {
}
