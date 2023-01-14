require "test_helper"

class Api::V1::WeathersControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_v1_weathers_create_url
    assert_response :success
  end

  test "should get read" do
    get api_v1_weathers_read_url
    assert_response :success
  end

  test "should get update" do
    get api_v1_weathers_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_weathers_destroy_url
    assert_response :success
  end
end
