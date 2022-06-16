package com.sha.microserviceusermanagement.service;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sha.microserviceusermanagement.helper.CSVHelper;
import com.sha.microserviceusermanagement.model.Grade;
import com.sha.microserviceusermanagement.repository.GradeRepository;

@Service
public class CSVService {
    @Autowired
    GradeRepository repository;

    public void save(MultipartFile file) {
        try {
            List<Grade> grades = CSVHelper.csvToTutorials(file.getInputStream());
            repository.saveAll(grades);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public ByteArrayInputStream load() {
        List<Grade> grades = repository.findAll();

        ByteArrayInputStream in = CSVHelper.tutorialsToCSV(grades);
        return in;
    }

    public List<Grade> getAllTutorials() {
        return repository.findAll();
    }
}