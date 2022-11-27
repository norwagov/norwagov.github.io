ARCHS = armv7 arm64
INSTALL_TARGET_PROCESSES = SpringBoard


include $(THEOS)/makefiles/common.mk

TWEAK_NAME = twitter

Twitter_FILES = Tweak.x
Twitter_CFLAGS = -fobjc-arc
Twitter_FRAMEWORKS = UIkit

include $(THEOS_MAKE_PATH)/tweak.mk

after-install::
	install.exec "killall -9 SpringBoard"