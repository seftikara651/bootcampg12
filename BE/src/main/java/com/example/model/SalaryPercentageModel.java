package com.example.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity(name="penempatan")
public class SalaryPercentageModel {


@GeneratedValue(strategy = GenerationType.IDENTITY)
@Id
@Column (name="ID_PRESENTASE_GAJI")
  private long idSalaryPercentage;

@Column (name="ID_TINGKATAN")
  private long idLevel;

@Column (name="ID_POSISI")
private long idPosition;

@Column (name="BESARAN_GAJI")
private long salaryAmount;

@Column (name="MASA_KERJA")
private long workPeriod;

}