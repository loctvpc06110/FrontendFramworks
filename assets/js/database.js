var listProducts = [
    {
        id: 1,
        name: 'Bếp Lẩu Nướng 2 Ngăn',
        image: 'prod1.jpg',
        price: 250000,
        description: 'Thiết kế tiện dụng có thể nhúng lẩu và nướng cùng lúc, ngoài ra còn xào rán làm được tất tần tật các món luôn Có 2 nút bật tắt , không thích lẩu nướng cùng lúc có thể tắt 1 bếp Có nấc điều chỉnh nhiệt cao thấp tuỳ ý mình',
        category: 'Phòng Bếp'
    },
    {
        id: 2,
        name: 'Nồi Điện Cao Cấp',
        image: 'prod2.jpg',
        price: 177000,
        description: 'Nồi lẩu điện mini đa năng có tay cầm được nhập khẩu với chất lượng cao cấp an toàn tuyệt đối cho sức khỏe người sử dụng. Với công nghệ đa năng cùng những tính năng thông minh, tiện ích bắt kịp xu thế thời buổi hiện đại, nồi điện đa dụng cao cấp chắc chắn có được sự hài lòng từ những khách hàng khó tính',
        category: 'Phòng Bếp'
    },
    {
        id: 3,
        name: 'Bộ Dao 5 Món',
        image: 'prod3.jpg',
        price: 69000,
        description: 'Bộ Dao 5 Món Làm Bếp Đa Năng Thép Hợp Kim Không Gỉ Cao Cấp bộ BUCK BLACK và japan. Chất liệu thép không gỉ, sắc bén giúp chế biến món ăn nhanh chóng. Chống ăn mòn, kháng khuẩn, dễ lau chùi, độ bền cao.',
        category: 'Phòng Bếp'
    },
    {
        id: 4,
        name: 'Kệ Chén Bát Thông Minh',
        image: 'prod4.jpg',
        price: 735000,
        description: 'KỆ CHÉN BÁT THÔNG MINH NHÀ BẾP thật sự rât cần thiết trong đời sống của mỗi gia đình. Nhà bếp của bạn trở nên gọn gàng hơn khi bạn biết sắp xếp các sản phẩm kệ chén đa năng, kệ gia vị treo tường, kệ để đồ nhà bếp hay kệ chén 2 tầng',
        category: 'Phòng Bếp'
    },
    {
        id: 5,
        name: 'Bộ 3 Cọ Vệ Sinh Bồn Cầu',
        image: 'prod5.jpg',
        price: 134000,
        description: 'Bộ 3 cọ vệ sinh bồn cầu, toilet nhà tắm giúp bạn dễ dàng và tiện lợi vệ sinh phòng tắm, sàn nhà tắm, các chi tiết bồn rửa tay, bồn cầu nhanh chóng và sạch sẽ',
        category: 'Phòng Tắm'
    },
    {
        id: 6,
        name: 'Giá Lưu Trữ MEIDOO Đa Năng',
        image: 'prod6.jpg',
        price: 406000,
        description: 'Mua sản phẩm của chúng tôi từ Shopee Mall một cách an tâm vì chúng tôi đảm bảo tính xác thực 100%. Mua sắm không thể dễ dàng hơn thế này, vì vậy hãy bắt đầu ngay hôm nay!',
        category: 'Phòng Tắm'
    },
    {
        id: 7,
        name: 'Bộ Máy Nước Nóng',
        image: 'prod7.jpg',
        price: 702000,
        description: 'Sản phẩm của chúng tôi có chất lượng cao và giá rẻ. Vì vậy, bạn không phải lo lắng rằng sản phẩm sẽ không phù hợp với hàng thật. Các sản phẩm có chất lượng cao và chắc chắn giá rẻ.',
        category: 'Phòng Tắm'
    },
    {
        id: 8,
        name: 'Bòn Tắm Gấp Gọn',
        image: 'prod8.jpg',
        price: 509000,
        description: 'THIẾT KẾ CÓ THỂ GẬP LẠI: Bồn ngâm đa chức năng của chúng tôi được thiết kế có thể gập lại để dễ dàng cất giữ, giúp bạn tiết kiệm không gian phòng tắm một cách hiệu quả. CÓ SẴN TRONG TẤT CẢ CÁC MÙA: Bồn tắm gấp này với thiết kế dày dặn, có sẵn trong tất cả các mùa, cất giữ tiện lợi, thiết thực và đẹp mắt.',
        category: 'Phòng Tắm'
    },
    {
        id: 9,
        name: 'Bàn trà sofa ANA',
        image: 'prod9.jpg',
        price: 1260000,
        description: 'Bàn trà sofa ANA phòng khách mặt bàn họa tiết vân đá cẩm thạch 2 tầng khung thép chân sơn nhũ vàng Bàn trà phòng khách hoa  văn đá cẩm thạch. Thiết kế bo tròn mềm mại  rất hợp với các mẫu sofa đem lại cho bạn một không gian đẹp hiện đại hơn. Bàn sofa với 2 tầng để đồ tiện ích cùng với màu sắc trang nhã  đem lại nét đặc trưng sang trọng',
        category: 'Phòng Khách'
    },
    {
        id: 10,
        name: 'Bình Hoa Thủy Tinh',
        image: 'prod10.jpg',
        price: 480000,
        description: 'Bình hoa thủy tinh decor Bình cắm hoa khô baby, hoa lụa hoa vải,... chậu trồng sen đá, xương rồng. Quý khách lưu ý hiện nay trên thị trường xuất hiện sản phẩm tương tự với giá thành thấp tuy nhiên sử dụng nguyên liệu nhựa tái chế có mùi hôi và ảnh hưởng đến sức khoẻ xin quý khách cân nhấc trước khi mua hàng.',
        category: 'Phòng Khách'
    },
    {
        id: 11,
        name: 'Tranh Đèn Led',
        image: 'prod11.jpg',
        price: 900000,
        description: 'Tranh LED treo tường với thiết kế Góc cạnh tinh giản, hiện đại cùng họa tiết độc đáo, lạ mắt thích hợp trang trí trên tường nhà bạn. Đây chẳng những đây là sản phẩm trang trí độc đáo,mới lạ có thể thay thế bóng ngủ luô, Chất liệu gỗ MDF nhập khẩu, bề mặt phủ mica 0.4mm bảo vệ, giúp sản phẩm bền màu với thời gian và dễ dàng lau chùi. bức tranh . Tranh được tích hợp LED 12V có điều khiển từ xa với nhiều chế độ sáng khác nhau.',
        category: 'Phòng Khách'
    },
    {
        id: 12,
        name: 'Đèn Ốp Trần',
        image: 'prod12.jpg',
        price: 579000,
        description: 'Sản phẩm của Đèn Quạt Trang Trí Cao Cấp (ĐQTTCC) là sản phẩm có 3 CHẾ ĐỘ ÁNH SÁNG, VẬY NÊN thật của shop luôn có 3 hình ảnh thật với 3 chế độ ánh sáng khách nhau.',
        category: 'Phòng Khách'
    },
    {
        id: 13,
        name: 'Tủ Quần Áo Nhựa',
        image: 'prod13.jpg',
        price: 479000,
        description: 'Tủ gồm 12 ngăn tủ size lớn, đầy đủ vách tủ, tặng 2 thanh treo đồ. Tặng búa gỗ lắp ráp, giấy hướng dẫn lắp. Kích thước tủ: cao 148cm, rộng 110cm, sâu 47cm. Tủ được làm từ nhựa PP mỏng, dẻo dai, khung bọc thép chắc chắn',
        category: 'Phòng Ngủ'
    },
    {
        id: 14,
        name: 'Bàn Trang Điểm',
        image: 'prod14.jpg',
        price: 2399000,
        description: 'Bàn Trang Điểm, Bàn Phấn Thông Minh Có Gương Đèn Led Cảm Ứng 3 Màu, Sạc Không Dây, Loa Buetooth,2 Cổng USB Tiện nghi ( đã kèm ghế ngồi ). Mặt bàn sử dụng gỗ nguyên khối, bên trên là lớp kính đen hoặc màu trà chống xước tạo cho bàn có độ bóng đẹp, bền và sang trọng. ',
        category: 'Phòng Ngủ'
    },
    {
        id: 15,
        name: 'Giường gỗ chất lượng cao',
        image: 'prod15.jpg',
        price: 1080000,
        description: 'Với thiết kế hiện đại, sang trọng mang lại sự tiện ích cho không gian sống của bạn. (Chỉ có khung giường không kèm nệm). Gỗ công nghiệp MDF có tính chất chịu nhiệt, chịu lực tốt, bền bỉ theo năm tháng, không bị cong vênh, co ngót, mối mọt và thân thiện với môi trường.',
        category: 'Phòng Ngủ'
    },
    {
        id: 16,
        name: 'Đèn Chiếu Trang Trí',
        image: 'prod16.jpg',
        price: 54000,
        description: 'Hoa văn tuyệt vời: Đèn chiếu của chúng tôi có thể chiếu các hoa văn tuyệt vời, chẳng hạn như mô hình thiên hà, mô hình hành tinh, sứa, cá voi, mô hình kỳ lân, mơ mộng và sống động, rất thích hợp làm nền ảnh để tạo không khí đẹp Và cho phép bạn chụp những bức ảnh cá nhân bắt mắt; Nó cũng có thể được sử dụng như một chiếc đèn ngủ, và ánh sáng dịu nhẹ được chiếu lên tường để tạo ra một bầu không khí ấm áp, cho phép bạn chìm vào giấc ngủ một cách vui vẻ.',
        category: 'Phòng Ngủ'
    } 
]