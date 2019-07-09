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
@Entity(name="Pendapatan")
public class SalaryModel{
	@Id
	@Column(name="ID_PENDAPATAN")
	private long idSalary;
	@Column(name="NIK")
	private String nik;
	@Column(name="TANGGAL_GAJI")
	private String salaryDate;
	@Column(name="GAJI_POKOK")
	private double baseSalary;
	@Column(name="TUNJANGAN_KELUARGA")
	private double familyAllowance ;
	@Column(name="TUNJANGAN_PEGAWAI")
	private double employeeAllowance;
	@Column(name="TUNJANGAN_TRANSPORT")
	private double transportAllowance;
	@Column(name="GAJI_KOTOR")
	private double grossSalary;
	@Column(name="PPH_PERBULAN")
	private double PPH;
	@Column(name="BPJS")
	private double BPJS;
	@Column(name="GAJI_BERSIH")
	private double netSalary;
	@Column(name="LAMA_LEMBUR")
	private long lengthOvertime;
	@Column(name="UANG_LEMBUR")
	private double overtimePay;
	@Column(name="VARIABLE_BONUS")
	private long bonusVariable;
	@Column(name="UANG_BONUS")
	private double bonusPay;
	@Column(name="TAKE_HOME_PAY")
	private double takeHomePay;
	
}
