package com.sha.microserviceusermanagement.repository;

import com.sha.microserviceusermanagement.model.Grade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import com.sha.microserviceusermanagement.model.*;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Modifying;

public interface GradeRepository extends JpaRepository<Grade, Long> {

//    @Modifying
//    @Transactional
//    @Query (value="LOAD DATA LOCAL INFILE ?1 INTO TABLE grade FIELDS TERMINATED BY ',' IGNORE 1 LINES", nativeQuery = true)
//    public void bulkLoadData(String path);


}
