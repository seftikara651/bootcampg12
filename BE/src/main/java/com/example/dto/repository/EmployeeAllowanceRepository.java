package com.example.dto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dto.model.EmployeeAllowanceModel;

@Repository
public interface EmployeeAllowanceRepository extends JpaRepository<EmployeeAllowanceModel, Long>{};