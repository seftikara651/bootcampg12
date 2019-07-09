package com.example.dto.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name="Posisi")
public class PositionModel{
	@Id
	@Column(name="ID_POSISI")
	private long idPosition;
	
	@Column(name="NAMA_POSISI")
	private String positionName;

}