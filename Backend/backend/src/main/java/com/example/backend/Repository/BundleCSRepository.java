package com.example.backend.Repository;

import com.example.backend.DBEntity.BundleCS;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository

public interface BundleCSRepository extends JpaRepository<BundleCS,Long> {
    @Query(value="UPDATE bundlecs SET  status_bundle = :status_bundle  WHERE id_bundle = :id_bundle", nativeQuery = true)
    void Change(@Param("status_bundle") String 	status_bundle, @Param("id_bundle") long id_bundle);

}
