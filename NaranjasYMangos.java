package org.generation.livecoding;
import java.util.Scanner;

public class NaranjasYMangos {
	
	
		public static void main(String[] args) {
			
			Scanner scan = new Scanner(System.in);
			int mangos=0;
			int naranjas=0;
			System.out.println("Introduce el numero de mangos");
			mangos= Integer.parseInt(scan.nextLine());
			System.out.println("¿Introduce numero de naranjas?");
			naranjas= Integer.parseInt(scan.nextLine());
			scan.close();
			System.out.println(MangosYNaranjas(mangos, naranjas));
			
		}

		public static String MangosYNaranjas(int mangos,int naranjas) {
			String mensaje = "";
			int divisor = 0;
			int mangosEnCajas =0;
			int naranjasEnCajas =0;
			if(mangos>naranjas) {
				divisor = mangos;
			}else {
				divisor = naranjas;
			}
			while(divisor-->1) {
				if(mangos%divisor==0 && naranjas%divisor==0) {
					break;
				}
			}
			
			mangosEnCajas = mangos/divisor;
			naranjasEnCajas = naranjas/divisor;
			
			mensaje = "Cajas: "+divisor+" mangos por caja: "+mangosEnCajas+" naranjas por caja: "+naranjasEnCajas;
			
			return mensaje;
		}
		
	}
