<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit99a2061ffb23a738df8af71d0e552b4e
{
    public static $prefixLengthsPsr4 = array (
        'K' => 
        array (
            'Kirby\\' => 6,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Kirby\\' => 
        array (
            0 => __DIR__ . '/..' . '/getkirby/composer-installer/src',
            1 => __DIR__ . '/../..' . '/site/plugins/kql/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit99a2061ffb23a738df8af71d0e552b4e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit99a2061ffb23a738df8af71d0e552b4e::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit99a2061ffb23a738df8af71d0e552b4e::$classMap;

        }, null, ClassLoader::class);
    }
}
