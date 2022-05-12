package model;

import java.io.Serializable;
import java.sql.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.Range;

import lombok.Data;


@Data
@Entity
@Table(name = "taixe", schema = "quanly")
public class Driver implements Serializable{

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 2522377480978137486L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idtaixe;
	
	@NotNull
	private String ten;
	
	@NotNull
	private int cccd;
	
	@NotNull
	private int mabang;
	
	@NotNull
	private String loaibang;
	
	@NotNull
	private String diachi;
	
	@NotNull
	private Date ngaysinh;
	
	@NotNull
	private int thamnien;
	
}
