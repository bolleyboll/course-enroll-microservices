package com.sha.microservicecoursemanagement.repository;

import com.sha.microservicecoursemanagement.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import com.sha.microservicecoursemanagement.model.*;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Modifying;

public interface GradeRepository extends JpaRepository<Grade, Long> {

    @Modifying
    @Transactional
    @Query (value="LOAD DATA LOCAL INFILE '/home/gopal/Desktop/course-enroll-microservices/gradedata.txt' INTO TABLE grade FIELDS TERMINATED BY ',' IGNORE 1 LINES", nativeQuery = true)
    public void bulkLoadData(String );


}
