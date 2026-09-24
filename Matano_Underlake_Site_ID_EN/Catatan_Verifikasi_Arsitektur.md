# Data center bawah danau: verifikasi arsitektur kawasan

Tanggal: 20 September 2026. Dokumen ini menjelaskan keputusan pada `Matano_Underlake_Site_ID` dan `Matano_Underlake_Site_EN`. Gambar merupakan konsep kawasan, bukan desain kelistrikan siap konstruksi, penetapan kedalaman, atau bukti bahwa instalasi aman bagi habitat.

## 1. Hasil pemeriksaan gambar acuan

| Bagian gambar acuan | Penilaian | Koreksi pada gambar baru |
|---|---|---|
| Shore base berisi daya dan PoP fiber | Prinsipnya sesuai sebagai fasilitas yang mudah diakses. | Ditampilkan sebagai ruang kontrol, panel proteksi, UPS darat dan PoP, di atas elevasi banjir rencana. |
| Ruang kontrol harus di bawah tanah | Tidak mengikuti kebutuhan fungsional secara otomatis. Kedekatan dengan danau menambah risiko rembesan, banjir dan air masuk melalui duct. | Bagian bawah tanah berupa galeri kabel opsional dengan pemisahan daya/fiber, seal penetrasi, deteksi air dan sump. |
| Kabel umbilical menggantung lurus ke modul | Belum memperlihatkan perlindungan, dukungan mekanis dan landfall. | Kabel digambarkan mengikuti koridor terlindung melalui landfall dan dasar danau. Kedalaman penguburan serta radius tekuk belum ditentukan. |
| Modul pasti diletakkan di bawah termoklin dan dekat zona anoksik | Tidak dapat ditetapkan dari skema generik danau. | Tidak ada batas stratifikasi rekaan atau angka kedalaman operasi. Lokasi bench perlu survei temperatur, oksigen, bathymetry dan geoteknik. |
| Palapa Ring digambar di dasar danau | Tidak ada bukti rute tersebut dalam bahan yang diperiksa. | Uplink ditampilkan menuju jaringan operator di darat. Interkoneksi Palapa Ring hanya boleh dinyatakan setelah titik layanan dan jalurnya diverifikasi. |
| Microwave di atas danau | Endpoint dan hubungannya dengan modul tidak jelas. | Radio ditempatkan di darat sebagai cadangan backhaul PoP. Ia tidak menggantikan kabel antara shore base dan modul. |
| Closed-loop heat exchanger | Tepat sebagai konsep pemisahan coolant dari air danau, tetapi tidak menghilangkan dampak panas. | HX dekat modul, dua sambungan coolant, pemantauan kondisi danau dan akses recovery. |

Tiga warna membedakan tanah/dasar danau, kolom air danau, serta infrastruktur terlindung. Warna air tidak menyatakan kedalaman atau kondisi oksigen tertentu. Seluruh jarak dan elevasi digambar secara skematik, termasuk garis banjir rencana yang masih memerlukan studi hidrologi.

## 2. Ruang kontrol dan galeri kabel bawah tanah

Fungsi yang diperlukan adalah fasilitas terminasi kabel, distribusi daya, kontrol keselamatan dan koneksi jaringan di darat. Rekomendasi menempatkan panel utama serta operator di atas elevasi banjir merupakan keputusan konseptual berbasis pengurangan paparan banjir, bukan klaim kepatuhan terhadap peraturan bangunan tertentu. Galeri bawah tanah boleh digunakan apabila berguna untuk perlindungan dan pengelolaan kabel, tetapi membutuhkan desain rembesan, tekanan air tanah, uplift, firestop, akses servis dan jalur evakuasi yang sesuai. Sump tidak boleh menjadi satu-satunya penghalang masuknya air.

Jika ruang kontrol benar-benar harus berada di bawah tanah karena kajian keamanan, diperlukan desain tersendiri untuk waterproofing, kompartemen, drainase redundan, deteksi kebocoran, ventilasi, keselamatan personel dan akses. Tidak ada keharusan fisika yang membuat bunker lebih tepat untuk lokasi ini. Kabel berarmor atau duct juga tidak otomatis tahan sabotase; koridor, pengawasan dan kemudahan inspeksi merupakan bagian dari desain.

## 3. Mengapa inverter atau MCB saja tidak cukup

Inverter mengonversi daya listrik, umumnya DC ke AC. Fungsi ini berbeda dari deteksi dan pemutusan gangguan. MCB atau MCCB memberikan proteksi arus lebih sesuai karakteristiknya. Arus gangguan ke air dapat terlalu kecil untuk memenuhi kondisi pemutusan arus lebih yang diperlukan. Kinerja pemutus harus dinilai terhadap impedansi lintasan gangguan, kurva operasi dan sistem pembumian. [Schneider Electric, TN system - Principle](https://www.electrical-installation.org/enwiki/TN_system_-_Principle).

RCD mendeteksi ketidakseimbangan arus pada konduktor aktif. Untuk penjumlahan arus bertanda, prinsipnya dapat ditulis sebagai $i_\Delta(t)=\sum_k i_k(t)$; arus yang kembali melalui lintasan di luar sensor menghasilkan arus residual. Pada sistem yang dipilih secara tepat, RCD/RCBO atau relay residual dengan pemutus terkait dapat memicu pemutusan gangguan. Relay atau monitor yang hanya menghasilkan alarm tidak sama dengan perangkat yang benar-benar memutus suplai. [Schneider Electric, Description of RCDs](https://www.electrical-installation.org/enwiki/Description_of_RCDs).

Tidak ada jenis RCD universal untuk seluruh konfigurasi ini. UPS, penggerak motor dan inverter PV dapat memengaruhi bentuk arus bocor; komponen DC dapat mengganggu perangkat tertentu. Pemilihan tipe, termasuk kemungkinan kebutuhan tipe B, dan koordinasi perangkat seri/paralel harus mengikuti topologi serta spesifikasi peralatan. Gambar tidak menetapkan tipe B sebagai jawaban otomatis. [Schneider Electric, RCD selection in the presence of DC earth leakage currents](https://www.electrical-installation.org/enwiki/RCDs_selection_in_presence_of_DC_earth_leakage_currents).

Pembumian belum dipilih final. Diagram menunjukkan kebutuhan konduktor proteksi PE dan bonding yang direkayasa; air danau tidak direncanakan sebagai konduktor balik normal. Bila digunakan sistem IT dengan sumber terisolasi, skema monitoring isolasi dan logika gangguan pertamanya harus dianalisis tersendiri. PE tidak boleh ikut terputus oleh pemutusan konduktor aktif.

## 4. Respons konseptual terhadap kabel terpotong atau rusak

1. **Deteksi lokal.** Panel darat memantau arus lebih, arus residual dan integritas pilot proteksi. Pilot merupakan fungsi pengawasan khusus yang harus dirancang dan diuji, bukan sekadar ping jaringan. Kabel terputus tanpa arus bocor yang memadai belum tentu memicu RCD; pengawasan kontinuitas menangani kelas gangguan yang berbeda.
2. **Pemutusan darat.** QS membuka suplai feeder yang terganggu. Semua sumber yang dapat menyuplai feeder, termasuk utilitas, PV dan UPS darat, ditempatkan di sisi hulu QS pada konsep ini. Catu kontrol serta mekanisme trip harus tetap berfungsi pada gangguan atau kehilangan daya, dan kegagalan pemutus perlu ditangani dalam studi proteksi cadangan.
3. **Pencegahan suplai balik.** QB dan fungsi pencegah arus balik pada sisi modul harus mencegah UPS lokal atau jalur alternatif memberi energi ke segmen kabel yang rusak. Kemampuan tersebut merupakan persyaratan desain yang belum dibuktikan pada produk UPS tertentu. UPS dengan label anti-islanding saja tidak membuktikan seluruh fungsi isolasi feeder.
4. **Pertahankan beban internal yang diperlukan.** UPS lokal opsional dapat mempertahankan pendinginan, kontrol, pencatatan dan shutdown teratur, selama gangguan berada di feeder eksternal dan kondisi internal masih aman. Kebocoran internal atau gangguan baterai dapat menuntut strategi pemutusan yang berbeda.
5. **Trip terkunci.** Tidak ada reclose otomatis pada feeder yang diduga rusak. Sebelum kembali beroperasi, diperlukan inspeksi, perbaikan, pemeriksaan isolasi dan verifikasi tidak ada sumber yang masih memberi energi. Proteksi tidak bergantung pada cloud atau perintah operator melalui fiber yang mungkin ikut putus.

Rangkaian ini merupakan persyaratan fungsi keselamatan. Pemilihan pemutus, jumlah kutub yang dibuka, koordinasi netral, release trip, backfeed barrier, serta toleransi kegagalan tunggal belum dirinci. Nominal arus, tegangan, sensitivitas residual dan waktu trip sengaja tidak diberikan sebagai spesifikasi pemasangan.

## 5. Perhitungan awal yang perlu mendasari desain listrik

Angka berikut hanya contoh untuk menunjukkan mengapa pemilihan kabel dan pemutus memerlukan perhitungan:

- Untuk daya aktif $P=2{,}1\,\mathrm{kW}$, suplai AC satu fase $U=230\,\mathrm{V}$ dan faktor daya asumsi $\mathrm{PF}=0{,}95$, arus beban adalah $I=P/(U\,\mathrm{PF})\approx9{,}61\,\mathrm{A}$. Ini bukan penetapan tegangan feeder atau rating MCB.
- Untuk contoh lintasan gangguan resistif efektif $R_f=1000\,\Omega$, pendekatan $I_f=U/R_f$ menghasilkan $0{,}23\,\mathrm{A}$. Arus ini jauh lebih kecil daripada arus beban contoh, sehingga tidak boleh diasumsikan cukup untuk memicu proteksi arus lebih. Nilai $R_f$ bukan resistansi air Matano yang diukur dan tidak digunakan untuk menentukan zona aman.
- Untuk contoh kabel tembaga dua konduktor dengan panjang satu arah $L=500\,\mathrm{m}$, penampang $A=6\,\mathrm{mm^2}$ dan resistivitas asumsi pada sekitar 20 °C sebesar $\rho_c=0{,}0175\,\Omega\,\mathrm{mm^2\,m^{-1}}$, resistansi loop pendekatan $R=2\rho_c L/A$ adalah $2{,}92\,\Omega$. Pada arus 9,61 A, jatuh tegangan resistif $\Delta U\approx IR$ adalah 28,0 V dan rugi kabel $P_\mathrm{loss}=I^2R$ sekitar 269 W. Contoh ini mengabaikan reaktansi dan kenaikan suhu serta bukan analisis load-flow lengkap. Panjang nyata, tegangan dan ukuran kabel harus dipilih ulang dari data lokasi.

Selain jatuh tegangan, studi harus mencakup kemampuan hantar arus pada kondisi terendam/terkubur, arus hubung singkat maksimum dan minimum, kapasitansi kabel, kebocoran normal, koordinasi proteksi, surja, ikatan selubung/armor dan tegangan sentuh. Satu kabel pada gambar hanya menyatakan prinsip; gambar ini tidak membuktikan redundansi 2N atau pemisahan geografis feeder A/B.

## 6. Proteksi habitat: mengurangi paparan, bukan menjamin nol risiko

Pemutusan memiliki waktu deteksi dan waktu pembukaan mekanis. Karena itu, energi gangguan tidak otomatis nol: secara umum $E_f=\int_0^{t_\mathrm{clear}}v(t)i(t)\,dt$. Besarnya medan listrik lokal berkaitan dengan distribusi potensial dan konduktivitas, melalui $\mathbf{E}=-\nabla\phi$ dan $\mathbf{J}=\sigma\mathbf{E}$. Geometri kabel rusak, lintasan balik, conductivity air/sedimen, bentuk gelombang dan durasi menentukan paparan. Tidak ada batas arus manusia yang dapat langsung diperlakukan sebagai jaminan keselamatan seluruh organisme danau.

Oleh sebab itu, skema ini hanya dapat disebut upaya pembatasan paparan sampai studi medan listrik, koordinasi trip dan evaluasi ekologis selesai. Perlindungan mekanis, segmentasi feeder dan deteksi dini melengkapi pemutusan, tetapi tidak menggantikan verifikasi. Closed-loop HX juga tetap membuang panas ke danau walaupun tidak membuang coolant pada operasi normal. Evaluasi plume termal, biofouling, potensi kebocoran coolant dan dampak pekerjaan penguburan kabel tetap diperlukan. Prinsip pemutusan otomatis, bonding dan pemisahan listrik dibahas dalam [Schneider Electric, Protection against electric shock](https://www.electrical-installation.org/enwiki/Protection_against_electric_shock); sumber tersebut bukan sertifikasi keselamatan habitat.

## 7. Apa yang dapat disimpulkan dari data Matano

Paper yang dilampirkan, Crowe et al. (2008), *The biogeochemistry of tropical lakes: A case study from Lake Matano, Indonesia*, **Limnology and Oceanography**, 53(1), 319-331, membahas pengukuran 2004 dan 2005. Pada halaman jurnal 322, penulis melaporkan pycnocline sekitar 100 m, metalimnion sekitar 100-220 m, dan temperatur hypolimnion sekitar 25,5 °C. Oksigen pada sampel yang lebih dalam daripada sekitar 100 m berada di bawah batas deteksi metode yang digunakan. Ini adalah informasi historis tentang lokasi pengukuran penelitian, bukan profil terbaru di calon lokasi modul.

Implikasinya, skema danau beriklim sedang dengan lapisan bawah yang dianggap sangat dingin tidak boleh langsung diterapkan. Termoklin tidak otomatis identik dengan batas oksigen, dan zona anoksik bukan kriteria keselamatan struktur atau ekologi. Perlu survei CTD/temperatur, oksigen terlarut, conductivity, muka air, arus, bathymetry, stabilitas lereng dan sedimen sebelum memilih bench. Gambar baru tidak menetapkan modul berada pada kedalaman 30 m, 100 m, atau di bawah termoklin tertentu.

## 8. Caption untuk paper

**Indonesia.** Potongan konseptual kawasan data center bawah danau yang menghubungkan fasilitas kontrol dan kelistrikan darat, galeri kabel opsional, koridor landfall terlindung, dan modul limas persegi terpancung pada bench dasar danau. Tiga warna membedakan tanah, kolom air dan infrastruktur terlindung. Panel bawah memperlihatkan prinsip pemutusan feeder di darat dan pencegahan suplai balik dari modul, dengan kontrol keselamatan lokal dan pembatasan penutupan ulang setelah gangguan. Trase, elevasi banjir, kedalaman operasi, stratifikasi danau dan parameter proteksi memerlukan penetapan berdasarkan survei dan analisis desain.

**English.** Conceptual site section of an underlake data center linking shore-based control and electrical facilities, an optional cable gallery, a protected landfall corridor, and a truncated square-pyramid module on a lakebed bench. Three colours distinguish terrain, the water column and protected infrastructure. The lower panel illustrates shore-side feeder disconnection and module-side backfeed prevention, supported by local safety controls and inhibited automatic reclosing following a fault. Cable routes, flood elevation, operating depth, lake stratification and protection settings require site surveys and design analysis.

## 9. Batas referensi dan keluaran

Sumber pabrikan yang ditautkan mendukung prinsip kelistrikan umum. Belum ada pemeriksaan kepatuhan PUIL/SNI, seluruh klausul IEC yang berlaku, persyaratan operator, izin pemanfaatan danau, ataupun penetapan ambang perlindungan habitat. Penempatan fasilitas, pilot proteksi, arsitektur QB dan prosedur recovery adalah usulan rekayasa yang masih perlu dikualifikasi. Tidak ada klaim rute aktual Palapa Ring di dasar danau.

Keluaran gambar tersedia dalam bahasa Indonesia dan Inggris, masing-masing PDF vektor, SVG dengan teks sebagai outline, dan PNG 5400 × 3720 piksel. Gunakan PDF/SVG untuk penempatan pada paper dan PNG untuk pratinjau.
