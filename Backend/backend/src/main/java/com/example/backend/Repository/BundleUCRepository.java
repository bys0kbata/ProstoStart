package com.example.backend.Repository;

import com.example.backend.DBEntity.BundleUC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface BundleUCRepository extends JpaRepository<BundleUC,Long> {
}
