package model;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;

import lombok.Data;

@Data 
@Entity
@Table(name = "chuyenxe", schema = "quanly")
public class Chuyenxe implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column( name = "tenkhachhang")
	private String tenkhachhang;
	
	@Column( name = "diemdi")
	private String diemdi;
	
	@Column(name ="diemden")
	private String diemden;

    @Column(name = "phuongtien")
	private String phuongtien;
    
    @Column(name = "gia")
  	private int gia;
	
    @Column(name = "trangthai")
	private String trangthai;
    
      
	
	
	

	
	
	
	
    
  
}
