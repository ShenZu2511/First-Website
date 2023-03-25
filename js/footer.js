$(document).ready(function() {
    $('body').append('<footer></footer>')
    $('footer').attr({
        'class': 'lg-light text-center text-lg-start',
    })
    {
        $('footer').append('<div></div>')
        $('footer div').attr({
            'class': 'container p-4',
        })
        {
            $('footer div').append('<div class="row"></div>')
            {
                $('.row').append('<div id="cus-sp-infor"></div>')
                $('#cus-sp-infor').attr({
                    'class':'col-lg-4 col-md-12 mb-4 mb-md-0',
                })
                {
                    $('#cus-sp-infor').append('<h5 class="text-uppercase"></h5>')
                    $('#cus-sp-infor h5').text('Thông tin hỗ trợ khách hàng')
                }
                {
                    $('#cus-sp-infor').append('<p></p>')
                    $('#cus-sp-infor p').text('Nếu bạn cần hỗ trợ, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại dưới đây:')
                }
                {
                    $('#cus-sp-infor').append('<ul></ul>')
                    $('#cus-sp-infor ul').attr({
                        'class': 'list-unstyled mb-0',
                    })
                    {
                        $('#cus-sp-infor ul').append('<li>Email: support@example.com</li>')
                        $('#cus-sp-infor ul').append('<li>Điện thoại: +84 123 456 789</li>')
                    }
                }
            }
            {
                $('.row').append('<div id="ovewview"></div>')
                $('#ovewview').attr({
                    'class':'col-lg-4 col-md-6 mb-4 mb-md-0',
                })
                {
                    $('#ovewview').append('<h5 class="text-uppercase"></h5>')
                    $('#ovewview h5').text('Giới thiệu về website')
                }
                {
                    $('#ovewview').append('<p></p>')
                    $('#ovewview p').text('Chúng tôi cung cấp các sản phẩm và dịch vụ tốt nhất cho khách hàng của mình.')
                }
            }
            {
                $('.row').append('<div id="infor"></div>')
                $('#infor').attr({
                    'class':'col-lg-4 col-md-12 mb-4 mb-md-0',
                })
                {
                    $('#infor').append('<h5 class="text-uppercase"></h5>')
                    $('#infor h5').text('Thông tin liên hệ')
                }
                {
                    $('#infor').append('<ul></ul>')
                    $('#infor ul').attr({
                        'class': 'list-unstyled mb-0',
                    })
                    {
                        $('#infor ul').append('<li>Địa chỉ: 123 Đường ABC, Quận XYZ, TP HCM</li>')
                        $('#infor ul').append('<li>Email: contact@example.com</li>')
                        $('#infor ul').append('<li>Điện thoại: +84 987 654 321</li>')
                    }
                }
            }
        }
        $('footer').append('<div id="license"></div>')
        $('#license').attr({
            'class':'text-center p-3',
        })
        $('#license').css({
            'background-color':'rgba(0, 0, 0, 0.2)' 
        })
        $('#license').text('© 2023 Example.com')
    }
})