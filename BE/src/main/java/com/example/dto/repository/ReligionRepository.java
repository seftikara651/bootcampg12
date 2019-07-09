package com.example.dto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.dto.model.ReligionModel;

@Repository
public interface ReligionRepository extends JpaRepository<ReligionModel, Long>{};