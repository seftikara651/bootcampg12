package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name="Tunjangan_pegawai")
public class EmployeeAllowanceModel{
	@Id
	@Column(name="ID_TUNJANGAN_PEGAWAI")
	private long employeeAllowanceId;
	@Column(name="ID_POSISI")
	private long positionId;
	@Column(name="ID_TINGKATAN")
	private long levelId;
	@Column(name="BESARAN_TUNJANGAN_PEGAWAI")
	private double allowanceAmount;

	public void update(EmployeeAllowanceModel newTunjangan_pegawaiModel){
		this.positionId=newTunjangan_pegawaiModel.positionId;
		this.levelId=newTunjangan_pegawaiModel.levelId;
		this.allowanceAmount=newTunjangan_pegawaiModel.allowanceAmount;
	}
}