package com.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 
 * EmployeeModel<br>
 * EmployeeModel (Karyawan) is a Class that represents Entity (Karyawan) in the Database
 * 
 * @author msams
 *
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name="Karyawan")
public class EmployeeModel{
	@Id
	@Column(name="NIK")
	private String nik;
	@Column(name="ID_POSISI")
	private long positionId;
	@Column(name="ID_TINGKATAN")
	private long levelId;
	@Column(name="ID_AGAMA")
	private long religionId;
	@Column(name="ID_PENEMPATAN")
	private long placementId;
	@Column(name="NAMA")
	private String name;
	@Column(name="NO_KTP")
	private String idNumber;
	@Column(name="ALAMAT")
	private byte address;
	@Column(name="TANGGAL_LAHIR")
	private String birthDate;
	@Column(name="MASA_KERJA")
	private long workPeriod;
	@Column(name="STATUS_PERNIKAHAN")
	private int marriageStatus;
	@Column(name="KONTRAK_AWAL")
	private String beginContract;
	@Column(name="KONTRAK_AKHIR")
	private String endContract;
	@Column(name="JENIS_KELAMIN")
	private String gender;
	@Column(name="JUMLAH_ANAK")
	private long childCount;

	public void update(EmployeeModel newEmployeeModel){
		this.positionId=newEmployeeModel.positionId;
		this.levelId=newEmployeeModel.levelId;
		this.religionId=newEmployeeModel.religionId;
		this.placementId=newEmployeeModel.placementId;
		this.name=newEmployeeModel.name;
		this.idNumber=newEmployeeModel.idNumber;
		this.address=newEmployeeModel.address;
		this.birthDate=newEmployeeModel.birthDate;
		this.workPeriod=newEmployeeModel.workPeriod;
		this.marriageStatus=newEmployeeModel.marriageStatus;
		this.beginContract=newEmployeeModel.beginContract;
		this.endContract=newEmployeeModel.endContract;
		this.gender=newEmployeeModel.gender;
		this.childCount=newEmployeeModel.childCount;
	}
}