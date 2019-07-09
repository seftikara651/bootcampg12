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
public class PlacementModel {


@GeneratedValue(strategy = GenerationType.IDENTITY)
@Id
@Column (name="ID_PENEMPATAN")
  private long idPlacement;

@Column (name="KOTA_PENEMPATAN")
  private String cityPlacement;

@Column (name="UMK_PENEMPATAN")
private String minSalaryPlacement;

}